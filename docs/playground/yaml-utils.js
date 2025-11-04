/**
 * YAML support utilities for JSON-LD Playground
 * This module provides functionality to parse YAML input and convert JSON-LD output to YAML
 */

// This will be loaded if YAML library is available
(function(window) {
  'use strict';
  
  // Check if YAML library is available (will be loaded from CDN)
  function isYamlAvailable() {
    return typeof YAML !== 'undefined';
  }
  
  // YAML utilities namespace
  window.yamlUtils = {
    
    /**
     * Parse YAML string to JavaScript object
     * @param {string} yamlStr - YAML string to parse
     * @returns {object} Parsed JavaScript object
     * @throws {Error} If YAML parsing fails
     */
    parseYaml: function(yamlStr) {
      if (!isYamlAvailable()) {
        throw new Error('YAML library not available');
      }
      
      try {
        return YAML.parse(yamlStr);
      } catch (error) {
        throw new Error('YAML parsing error: ' + error.message);
      }
    },
    
    /**
     * Convert JavaScript object to YAML string
     * @param {object} obj - JavaScript object to convert
     * @returns {string} YAML string representation
     * @throws {Error} If YAML stringification fails
     */
    toYaml: function(obj) {
      if (!isYamlAvailable()) {
        throw new Error('YAML library not available');
      }
      
      try {
        return YAML.stringify(obj, {
          indent: 2,
          lineWidth: 0,
          minContentWidth: 0,
          quotingType: '"',
          forceQuotes: false
        });
      } catch (error) {
        throw new Error('YAML stringification error: ' + error.message);
      }
    },
    
    /**
     * Check if a string appears to be YAML format
     * @param {string} str - String to check
     * @returns {boolean} True if string appears to be YAML
     */
    isYamlFormat: function(str) {
      if (!str || typeof str !== 'string') {
        return false;
      }
      
      // Trim whitespace
      str = str.trim();
      
      // Empty or only whitespace
      if (!str) {
        return false;
      }
      
      // Check for JSON indicators (starts with { or [)
      if (str.startsWith('{') || str.startsWith('[')) {
        return false;
      }
      
      // Check for YAML indicators
      const yamlIndicators = [
        /^---\s*$/m,           // Document separator
        /^\s*-\s+/m,           // List items
        /^\s*\w+:\s*/m,        // Key-value pairs
        /^\s*\w+:\s*[|>]/m,    // Block scalars
        /^\s*!![\w\/]+/m       // Type tags
      ];
      
      return yamlIndicators.some(pattern => pattern.test(str));
    },
    
    /**
     * Convert between JSON and YAML safely
     * @param {string} input - Input string (JSON or YAML)
     * @param {string} outputFormat - 'json' or 'yaml'
     * @returns {string} Converted string
     */
    convert: function(input, outputFormat) {
      if (!input || typeof input !== 'string') {
        return input;
      }
      
      try {
        let obj;
        
        // Try to parse as JSON first, then YAML
        try {
          obj = JSON.parse(input);
        } catch (jsonError) {
          // If JSON parse fails, try YAML
          obj = this.parseYaml(input);
        }
        
        // Convert to requested format
        if (outputFormat === 'yaml') {
          return this.toYaml(obj);
        } else {
          return JSON.stringify(obj, null, 2);
        }
      } catch (error) {
        throw new Error('Conversion error: ' + error.message);
      }
    },
    
    /**
     * Check if YAML library is loaded
     * @returns {boolean} True if YAML library is available
     */
    isAvailable: isYamlAvailable
  };
  
})(window);